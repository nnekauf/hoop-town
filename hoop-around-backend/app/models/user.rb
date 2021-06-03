class User < ApplicationRecord
    enum role: [:coach, :player]
end
