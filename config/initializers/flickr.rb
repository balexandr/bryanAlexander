require 'flickraw'

class FlickrAPI
  Figaro.require_keys("flickr_api_key", "flickr_api_shared_secret")

  def initialize
    FlickRaw.api_key = ENV["flickr_api_key"]
    FlickRaw.shared_secret = ENV["flickr_api_shared_secret"]
    @user_id = ENV["flickr_user_id"]
  end

  def photos(slider_set_id)
    get_photos_by_album(slider_set_id) if defined? slider_set_id
  end
  
  private
  
  def get_photos_by_album(slider_set_id)
    flickr.photosets.getPhotos(
      photoset_id: slider_set_id,
      user_id: @user_id).photo.map do |photo|
        get_photo_sizes(photo.id,'Original')
    end.flatten
  end
  
  def get_photo_sizes(photo_id,desired_size)
    flickr.photos.getSizes(photo_id: photo_id).size.select do |size|
      size.label == desired_size
    end.map(&:source)
  end
end