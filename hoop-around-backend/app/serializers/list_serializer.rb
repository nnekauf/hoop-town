class ListSerializer < ActiveModel::Serializer
  attributes :name, :id

  has_many :players do
    object.players.order(rank: :asc)
  end

  
end
