class Team < ApplicationRecord
  belongs_to :coach, :class_name => "User"
  has_many :players, :class_name => "User"
  has_many :registrations
  has_many :tournaments, through: :registrations 
  

  validates_presence_of :name
  validates_presence_of :coach_id
end
