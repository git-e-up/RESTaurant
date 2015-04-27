class Order < ActiveRecord::Base
  belongs_to(:party)
  belongs_to(:food)

  def to_s
  end
  # def write_sentence
  #   sentence = ''
  #   sentence
  # end
  # def party_id
  #   @party_id
  # end
  #
  # def total
  #   @total
  # end
  #
  # def paid
  #   @paid
  # end
end
