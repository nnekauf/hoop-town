class Coach < ApplicationRecord
    has_many :players, through: :teams
    has_one :team

    has_secure_password

    validates_uniqueness_of :username
    validates_uniqueness_of :email
    validates_uniqueness_of :contact_number
    validates_length_of :contact_number, is: 10,  message: "Number must be 10 digits long"
    validates_presence_of :username
    validates_presence_of :contact_number
    validates_presence_of :bio
    validates_presence_of :first_name
    validates_presence_of :last_name
    validates_presence_of :email
end
