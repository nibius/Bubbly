class DrinkOrderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :drink
  has_one :order
end
