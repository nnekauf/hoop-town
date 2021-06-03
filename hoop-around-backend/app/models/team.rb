class Team < ApplicationRecord
  # has_one :coach, :class_name => "User"
  # has_many :players, :class_name => "User"
  has_one :coach, -> { where("users.role = ?", User.roles[:coach]) }
  has_many :players, -> { where("users.role = ?", User.roles[:player]) }

  has_many :registrations
  has_many :tournaments, through: :registrations 
  

  validates_presence_of :name
  
end
