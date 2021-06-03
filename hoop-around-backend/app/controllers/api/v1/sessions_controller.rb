class Api::V1::SessionsController < ApplicationController
# before_save :send_email  #this can be used to handle sign ups via fb
    def new
      @errors = []
    end

    def create
        @coach = Coach.find_by(email: params[:coach][:email])
        if @coach && @coach.authenticate(params[:coach][:password])
            session[:coach_id] = @coach.id
            redirect_to "/home"
        elsif @coach
            @errors = ["Invalid Password"]
            render :new
          else
            @errors = ["Invalid Username"]
            render :new
          end
    end

    def create_with_fb
        
        coach = Coach.find_or_create_by(email: fb_auth['info']['email'], username: fb_auth['info']['name']) do |r|
          r.password = 'password' #we set their password here and it doesn't matter what it is, could autogenerate it
          #here we can send them an email with their temporary/current autogenerated pw which they can change at a later time
        end
        if coach.save
          session[:coach_id] = coach.id
          redirect_to "/coaches"
        else
          redirect_to signup_path
        end
    end
    
    def destroy
        session.clear
        redirect_to '/login'
    end

    private

        def fb_auth
            self.request.env['omniauth.auth']
        end
        
    
end