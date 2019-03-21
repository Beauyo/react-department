class Item < ApplicationRecord
    belongs_to :department, dependent: :destroy
end
