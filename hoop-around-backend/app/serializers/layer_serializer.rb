class PlayerSerializer < ActiveModel::Serializer
  attributes :name, :rank, :id, :list_id
end
