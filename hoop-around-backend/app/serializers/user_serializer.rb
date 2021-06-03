class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :contact_number, :bio, :first_name, :last_name, :role, :team_id
 
end
