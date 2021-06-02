class Player < ApplicationRecord

  validates :name, uniqueness: true

  has_one :coach, through: :team
  belongs_to :team
end
