class Api::V1::RegistrationsController < ApplicationController
    def index
        render json: Registration.all #, key_transform: :camel_lower
    end

    def show
       
        registration = Registration.find_by(id: params[:id])
        render json: registration
    end

    def create
       
        registration = Registration.create(registration_params)
        render json: registration
    end

    def destroy
        registration = Registration.find_by(id: params[:id])
        
        registration.destroy
        render json: {message: "success"}
    end

    private

    def registration_params

        params.require(:registration). permit(:name)
    end
end
