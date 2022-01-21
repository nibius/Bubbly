class OrdersController < ApplicationController

    def create 
        order = Order.where(order_params, status: 'active').first_or_create
        DrinkOrder.create(drink_id:params[:drink_id], order_id: order.id)
        render json: order, status: :created
    end

    def update
        order = Order.update(order_params)
        render json: order, status: :ok
    end


    private
    def order_params
        params.permit(:purchase, :user_id)
    end
    
end
