class Team < ApplicationRecord
  belongs_to :coach
  has_many :players 
  has_many :registrations
  has_many :tournaments, through: :registrations 
  

  validates_presence_of :name
  validates_presence_of :coach_id
end
