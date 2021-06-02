class Tournament < ApplicationRecord
    has_many teams, through: :registrations 
    has_many :registrations 
end
