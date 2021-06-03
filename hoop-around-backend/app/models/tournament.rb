class Tournament < ApplicationRecord
    has_many teams, through: :registrations 
    has_many :registrations 

    validates_presence_of :bio
end
