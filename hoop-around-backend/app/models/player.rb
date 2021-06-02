class Player < ApplicationRecord
  has_one :coach, through: :team
  belongs_to :team

  has_secure_password 

  validates :name, uniqueness: true
  
end
