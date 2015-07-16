class Order < ActiveRecord::Base
  belongs_to :food
  belongs_to :party

  # def created_at
  #   Time.at(created_at)
  # end
end
