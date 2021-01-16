import json
from PIL import Image, ImageDraw
import requests


class Pokemon:
  def __init__(self, name, id, image_url, types):
    self.name = name
    self.id = id
    self.image_url = image_url
    self.types = types
    self.colors = []


  def get_generation(self):
    if self.id <= 151:
      return 1
    elif self.id <= 251:
      return 2
    elif self.id <= 386:
      return 3
    elif self.id <= 493:
      return 4
    elif self.id <= 649:
      return 5
    elif self.id <= 721:
      return 6
    elif self.id <= 809:
      return 7
    elif self.id <= 898:
      return 8


  # comes from https://gist.github.com/zollinger/1722663
  def get_colors(self, numcolors=6, resize=150):
      # Resize image to speed up processing
      img = Image.open(requests.get(self.image_url, stream=True).raw)
      img = img.copy()
      img.thumbnail((resize, resize))

      # Reduce to palette
      paletted = img.convert('P', palette=Image.ADAPTIVE, colors=numcolors)

      # Find dominant colors
      palette = paletted.getpalette()
      color_counts = sorted(paletted.getcolors(), reverse=True)
      colors = list()
      for i in range(numcolors):
          palette_index = color_counts[i][1]
          dominant_color = palette[palette_index*3:palette_index*3+3]
          colors.append(tuple(dominant_color))

      # the first color is black, which doesn't make sense here
      return colors[1:]


  def get_type_list_string(self):
    string = ""
    for color in self.types:
      string += "{} ".format(color)
    return string    


  def get_color_list_string(self):
    string = ""
    for color in self.get_colors():
      string += "'rgba{}', ".format(color)
    string = string[:-2]
    return string


  def get_mixin_string(self):
    ###
    # example:
    # +color-swatch("Chespin #650", "rgba(98, 147, 108)", "rgba(98, 147, 108)", "rgba(98, 147, 108)", "rgba(98, 147, 108)", "rgba(98, 147, 108)", "starter grass pokemon gen6")
    ###
    colors = self.get_color_list_string()
    classes = "{} pokemon gen{}".format(self.get_type_list_string(), self.get_generation())
    return "+color-swatch('{} #{}', {}, '{}')".format(self.name, self.id, colors, classes)


if __name__ == "__main__":
  total_pokemon_count = 893

  with open('my-projects/pokemon_mixins_no_black.txt', 'w') as f:
    for id in range(1, total_pokemon_count + 1):
      pokemon_url = "https://pokeapi.co/api/v2/pokemon/{}".format(id)
      response = requests.request("GET", pokemon_url)
      results = json.loads(response.text)

      name = results["name"].capitalize()
      image_url = results["sprites"]["other"]["official-artwork"]['front_default']
      types = list(map(lambda x: x["type"]["name"], results["types"]))
      pokemon = Pokemon(name, id, image_url, types)
      # incorporate is_starter?
      # can also incorporate is_baby, is_mythical, is_legendary from https://pokeapi.co/api/v2/pokemon-species/id
      # or genera, habitat, shape

      f.write("%s\n" % pokemon.get_mixin_string())
      print("wrote", name, id)
