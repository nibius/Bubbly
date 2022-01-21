class OrderSerializer < ActiveModel::Serializer
  attributes :id, :purchase
has_many :drinks

end
