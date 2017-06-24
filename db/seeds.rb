# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Equipment.destroy_all
Spell.destroy_all

response = HTTParty.get('http://www.dnd5eapi.co/api/equipment')
json_response=JSON.parse(response.body)
json_response["results"].each do |result|
  Equipment.create(name: result["name"], url: result["url"])
end

response_spells = HTTParty.get('http://www.dnd5eapi.co/api/spells')
json_response_spells=JSON.parse(response_spells.body)
json_response_spells["results"].each do |result|
  Spell.create(name: result["name"], url: result["url"])
end
