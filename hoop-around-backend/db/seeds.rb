# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
List.create(name: "Top 5")


Player.create(name: "Kyrie Irving", rank: 1, list_id: 1)

Player.create(name: "James Harden", rank: 2, list_id: 1)

Player.create(name: "Kevin Durant", rank: 3, list_id: 1)

Player.create(name: "Blake Griffin", rank: 4, list_id: 1)

Player.create(name: "Jeff Green", rank: 5, list_id: 1)

