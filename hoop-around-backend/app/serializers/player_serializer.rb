class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :contact_number, :bio, :first_name, :last_name
  belongs_to :coach
  belongs_to :team
end
