class Player < ApplicationRecord
  belongs_to :list

  validates :name, uniqueness: true
  validates :rank, uniqueness: true
  validates :rank, numericality: { greater_than_or_equal_to: 1}
  validates :rank, numericality: { less_than_or_equal_to: 5 }




end
