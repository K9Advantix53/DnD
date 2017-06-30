class Character < ApplicationRecord
  validates :name, presence: true
  validates :profession, presence: true
  validates :hit_dice, presence: true

  belongs_to :user
  self.table_name = "characters"
end
