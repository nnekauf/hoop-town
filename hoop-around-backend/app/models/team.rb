class Team < ApplicationRecord
  belongs_to :coach
  has_many :players 
  has_many tournaments, through: :registrations 
  has_many :registrations

  validates_presence_of :name
  validates_presence_of :coach_id
end
