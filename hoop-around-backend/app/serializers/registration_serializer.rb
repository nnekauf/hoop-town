class RegistrationSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :team
  belongs_to :tournamnent
end
