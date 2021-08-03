class Team < ApplicationRecord
  # has_one :coach, :class_name => "User"
  # has_many :players, :class_name => "User"
  # has_many :users
  has_many :players, -> { where(role: [:player]) }, :class_name => "User"
  has_many :coach, -> { where(role: [:coach]) }, :class_name => "User"
  # has_many :players, -> { where(role: [:player]) }, :class_name => "User"

  has_many :registrations
  has_many :tournaments, through: :registrations 
  

  validates_presence_of :name
  
end
