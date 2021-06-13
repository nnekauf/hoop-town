class Tournament < ApplicationRecord
    has_many :registrations
    has_many :teams, through: :registrations 
     

    validates_presence_of :name
    validates_presence_of :venue 
    validates_presence_of :date_time
    validates_presence_of :host
    validates_presence_of :about
    validates_presence_of :street
    validates_presence_of :city
    validates_presence_of :state
    validates_presence_of :zipcode
    validates_presence_of :organizer_id
end
