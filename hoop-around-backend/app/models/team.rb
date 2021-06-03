class Team < ApplicationRecord
  has_one :coach, :class_name => "User"
  has_many :players, :class_name => "User"
  has_many :registrations
  has_many :tournaments, through: :registrations 
  

  validates_presence_of :name
  
end
