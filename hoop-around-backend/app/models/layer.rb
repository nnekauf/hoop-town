class Player < ApplicationRecord
  belongs_to :list

  validates :name, uniqueness: true




end
