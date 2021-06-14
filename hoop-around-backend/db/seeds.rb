# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: "thomas@bkballers.com", username: "thomas" , password: "password", bio: "The best bball Player there is", first_name: "Kyle", last_name: "Thomas", contact_number: 9998880978, team_id: 1, role: 0)
User.create(email: "mekel@hoopers.com", username: "mekelcoach" , password: "password", bio: "Been coaching since 5", first_name: "Mekel", last_name:"B", contact_number: 4448880978, team_id: 2, role: 0)

User.create(email: "johnny@bkballers.com", username: "johnny" , password: "password", bio: "Been balling since '98", first_name: "Johnny", last_name:"Johnson", contact_number: 9997770978, team_id: 1, role: 1)
User.create(email: "tyler@hoopers.com", username: "tyler" , password: "password", bio: "Been hooping since '98", first_name: "Tyler", last_name:"Johnson", contact_number: 4447770978, team_id: 2, role: 1)
User.create(email: "henry@bkballers.com", username: "henry" , password: "password", bio: "best to ever do it", first_name: "Henry", last_name:"Johnson", contact_number: 3457770978, team_id: 1, role: 1)
User.create(email: "sam@hoopers.com", username: "sam" , password: "password", bio: "I let my actions do the talking", first_name: "Sam", last_name:"Johnson", contact_number: 5437770978, team_id: 2, role: 1)
    
User.create(email: "test@test.com", username: "test" , password: "password", bio: "test", first_name: "test", last_name:"test", contact_number: 9997770974, role: 1)

Team.create(name: "Brooklyn Ballers")
Team.create(name: "Hoopers")
Team.create(name: "Titans")
Team.create(name: "Swishers")

Tournament.create(name: "Hoop Stars", venue: "BKG Gym", street: "231 Ballhill Road", city: "New York", state: "NY", zipcode: 11234, date_time: DateTime.parse("17/07/2021 11:00"), host: "Brooklyn Ballers", about: "Lets see who's the best in Brooklyn")
Tournament.create(name: "Aim High", venue: "Classon Park", street: "432 Classon Road", city: "New York", state: "NY", zipcode: 11224, date_time: DateTime.parse("13/04/2021 14:00"), host: "Netz", about: "You already know what it is, the annual classon tournament.")
Tournament.create(name: "Dreamers", venue: "BKG Gym", street: "231 Ballhill Road", city: "New York", state: "NY", zipcode: 11234, date_time: DateTime.parse("17/08/2021 11:00"), host: "Hollywood", about: "Show us what you got")
Tournament.create(name: "Champs", venue: "BKG Gym", street: "231 Ballhill Road", city: "New York", state: "NY", zipcode: 11234, date_time: DateTime.parse("17/09/2021 14:00"), host: "Beat the Champ", about: "Are you able to beat the reigning champs?")
Tournament.create(name: "Swish Tournament", venue: "BKG Gym", street: "231 Ballhill Road", city: "New York", state: "NY", zipcode: 11234, date_time: DateTime.parse("29/06/2021 1:00"), host: "Give Thanks", about: "Lets do it to save lives.")
Tournament.create(name: "Winner's Circle", venue: "BKG Gym", street: "231 Ballhill Road", city: "New York", state: "NY", zipcode: 11234, date_time: DateTime.parse("17/07/2021 16:00"), host: "Money Ball", about: "Winning team wins money!")

Registration.create(team_id: 1, tournament_id: 1)
Registration.create(team_id: 1, tournament_id: 2)
Registration.create(team_id: 2, tournament_id: 1)
Registration.create(team_id: 2, tournament_id: 2)
Registration.create(team_id: 3, tournament_id: 1)
Registration.create(team_id: 3, tournament_id: 2)
Registration.create(team_id: 4, tournament_id: 1)
Registration.create(team_id: 4, tournament_id: 2)
Registration.create(team_id: 1, tournament_id: 3)
Registration.create(team_id: 1, tournament_id: 4)
Registration.create(team_id: 2, tournament_id: 5)
Registration.create(team_id: 2, tournament_id: 6)
Registration.create(team_id: 3, tournament_id: 3)
Registration.create(team_id: 3, tournament_id: 4)
Registration.create(team_id: 4, tournament_id: 5)
Registration.create(team_id: 4, tournament_id: 6)