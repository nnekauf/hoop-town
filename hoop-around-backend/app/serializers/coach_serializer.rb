class CoachSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :contact_number, :password_digest, :bio, :first_name, :last_name
end
