class Api::V1::SessionsController < ApplicationController
# before_save :send_username  #this can be used to handle sign ups via fb
    def new
      @errors = []
    end

    def create #log in
     
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id
            render json: @user
        elsif @user
            render json: {
              error: "Invalid Password"
            }
     
          else
            render json: {
              error: "Invalid Username"
            }
 
          end
    end

    def get_current_user
      # binding.pry
      if logged_in?
        render json: current_user
      else
        render json: {
          error: "No one logged in"
        }
      end
    end
    
    def create_with_fb #log in/sign up with facebook
        
        user = User.find_or_create_by(username: fb_auth['info']['username'], username: fb_auth['info']['name']) do |r|
          r.password = 'password' #we set their password here and it doesn't matter what it is, could autogenerate it
          #here we can send them an username with their temporary/current autogenerated pw which they can change at a later time
        end
        if user.save
          session[:user_id] = user.id
          render json: UserSerializer.new(@user)
        else
          render json: {
              error: "Invalid Credentials"
            }
        end
    end
    
    def destroy #logout
        session.clear
        render json: {
          notice: "successfully logged out"
        }, status: :ok
    end

    private

        def fb_auth
            self.request.env['omniauth.auth']
        end
        
    
end