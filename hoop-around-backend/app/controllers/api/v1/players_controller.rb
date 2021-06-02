class Api::V1::PlayersController < ApplicationController
    before_action(:upcase_name, only: [:create]) 

    def upcase_name
        
        player_params["name"].upcase!
    end
    
    def index
        players = Player.all
       
        render json: players.order(rank: :asc) #, key_transform: :camel_lower
    end

    def show
       
        player = Player.find_by(id: params[:id])
        render json: player
    end

    def create
        # player = Player.create(player_params)
       
        player = Player.new(player_params)
        if player.save
            render json: player
        else 
           
            render json: {message: player.errors.full_messages}
        end
    
    end

    def destroy
        player = Player.find_by(id: params[:id])
        
        player.destroy
        render json: {message: "success"}
    end

    private

    def player_params

        params.require(:player). permit(:name, :id, :rank, :list_id)
    end
end
