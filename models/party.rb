class Party < ActiveRecord::Base
  has_many(:orders)
  has_many(:foods, through: :orders)

  # def name
  #   @name
  # end
  #
  # def count
  #   @count
  # end
end
