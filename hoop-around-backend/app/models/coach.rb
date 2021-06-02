class Coach < ApplicationRecord
    has_many :players, through: :teams
    has_one :team

end
