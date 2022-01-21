class DrinksController < ApplicationController

    def create 
        drink = Drink.create!(drink_params)
        render json: drink, status: :created
    end

    def index
        drinks = Drink.all
        render json: drinks, status: :ok
    end

    def destroy
        drinks = Drink.find(params[:id])
        render json: drinks, status: :ok

    end

        private
        def drink_params
            params.permit(:name, :price)
        end
        
        def render_invalid(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
end
