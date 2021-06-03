class User < ApplicationRecord
    belongs_to :team
    enum role: [:coach, :player]
end
