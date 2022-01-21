class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :drink_orders, through: :orders
end
