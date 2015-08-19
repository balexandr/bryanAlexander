require 'flickraw'

class ComfortableMexicanSofa::Tag::Photo
  include ComfortableMexicanSofa::Tag

  def self.regex_tag_signature(identifier = nil)
    identifier ||= IDENTIFIER_REGEX
    /\{\{\s*cms:photo:slider:(#{identifier})\s*\}\}/
  end

  def content
    html = "<ul class="'rslides'">"
    FlickrAPI.new.photos(identifier).each do |image|
      html << "<li><img src='" + image + "'/></li>"
    end
    html << "</ul>"
  end
  
  #Render content as Ruby/HTML
  def render
    content
  end
  
end