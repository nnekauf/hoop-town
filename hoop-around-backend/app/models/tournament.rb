class Tournament < ApplicationRecord
    has_many :registrations
    has_many :teams, through: :registrations 
     

    validates_presence_of :about
end
