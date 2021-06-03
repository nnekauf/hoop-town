class User < ApplicationRecord
    enum role: [:coach, :player]

    belongs_to :team
  
    has_secure_password 

    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :contact_number, uniqueness: true
    validates_length_of :contact_number, is: 10,  message: "Number must be 10 digits long"
  
    validates_presence_of :bio
    validates_presence_of :first_name
    validates_presence_of :last_name
    validates_presence_of :role
end
