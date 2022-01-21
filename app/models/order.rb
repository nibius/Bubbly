class Order < ApplicationRecord
  belongs_to :user
  has_many :drink_orders
  has_many :drinks, through: :drink_orders
end
