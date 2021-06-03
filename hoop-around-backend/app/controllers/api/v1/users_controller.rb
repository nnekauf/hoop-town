class Api::V1::UsersController < ApplicationController
        # before_action(:upcase_name, only: [:create]) 

    # def upcase_name
        
    #     user_params["name"].upcase!
    # end
    
    def index
        users = User.all
       
        render json: users
    end

    def show
       
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        # user = User.create(User_params)
       
        user = User.new(user_params)
        if user.save
            render json: user
        else 
           
            render json: {message: user.errors.full_messages}
        end
    
    end

    def destroy
        user = User.find_by(id: params[:id])
        
        user.destroy
        render json: {message: "success"}
    end

    private

    def user_params

        params.require(:user). permit(:name, :id, :list_id)
    end
end
