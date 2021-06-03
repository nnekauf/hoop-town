class Registration < ApplicationRecord
  belongs_to :team
  belongs_to :tournament

  validates_presence_of :team_id
  validates_presence_of :tournament_id
end
