class Team < ApplicationRecord
  belongs_to :coach
  has_many :players 
end
