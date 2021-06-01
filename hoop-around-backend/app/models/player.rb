class Player < ApplicationRecord

  validates :name, uniqueness: true

  belongs_to :coach
  belongs_to :team
end
