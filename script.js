(function () {
  //variables
  var song1, changePosition, changeSong, changeVolume, song2, pauseSong, playSong, playlist, song3, song4, updatePositionSlider, updateSlider;

  song1 = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/10_Billy_Breathes_(1)_(1).mp3'],
    volume: window.volume
  });

  song2 = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/harry-hood-small.mp3'],
    volume: window.volume
  });

  song3 = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/suzy_greenberg_small.mp3'],
    volume: window.volume
  });

  song4 = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/07_Theme_from_the_Bottom_(1).mp3'],
    volume: window.volume
  });

  window.open = true;

  window.volume = 0.5;

  window.position = 0;

  window.duration = 40.8;

  playlist = [song3];

  window.currentSong = playlist[0];

  window.add = null;

  changeSong = function (song) {
    window.currentSong.stop();
    window.currentSong.pos(0);
    window.position = 0;
    $(".slider").slider("value", 0);
    window.currentSong = song;
    $(".play-song > i").removeClass('fa-play');
    $(".play-song > i").addClass('fa-pause');
    window.open = false;
    return song.play();
  };

  updatePositionSlider = function () {
    return window.position += 1;
  };

  playSong = function (song) {
    song.play();
    return window.add = setInterval(updatePositionSlider, 1000);
  };

  pauseSong = function (song) {
    song.pause();
    return clearInterval(window.add);
  };

  changeVolume = function (song) {
    return song.volume(window.volume);
  };

  changePosition = function (song) {
    return song.pos(window.position);
  };

  updateSlider = function () {
    return $(".slider").slider("value", window.position);
  };

  $(function () {
    var slideUp;
    $(".slider").slider({
      min: 0,
      range: "min",
      max: window.duration,
      value: 0,
      slide: function (event, ui) {
        window.position = ui.value;
        return changePosition(window.currentSong);
      }
    });
    setInterval(updateSlider, 100);
    $("#volume-off").click(function () {
      currentSong.volume(0);
      return $(".slider-volume").slider("value", 0);
    });
    $("#volume-up").click(function () {
      currentSong.volume(1);
      return $(".slider-volume").slider("value", 100);
    });
    $(".slider-volume").slider({
      min: 0,
      range: "min",
      max: 100,
      value: 50,
      slide: function (event, ui) {
        window.volume = ui.value / 100;
        return changeVolume(window.currentSong);
      }
    });
    $("#play").click(function () {
      if (window.open) {
        playSong(window.currentSong);
        $(".play-song > i").removeClass('fa-play');
        $(".play-song > i").addClass('fa-pause');
        window.open = !window.open;
        return setInterval(updateSlider, 100);
      } else {
        pauseSong(window.currentSong);
        $(".play-song > i").removeClass('fa-pause');
        $(".play-song > i").addClass('fa-play');
        return window.open = !window.open;
      }
    });
    slideUp = true;
    $(".slide-up").click(function () {
      if (slideUp) {
        $(".song-list, .playlist-controls, .overlay").addClass("active");
        $(".slide-up").html("<i class='fa fa-chevron-down'></i>");
        return slideUp = !slideUp;
      } else {
        $(".song-list, .playlist-controls, .overlay").removeClass("active");
        $(".slide-up").html("<i class='fa fa-chevron-up'></i>");
        return slideUp = !slideUp;
      }
    });
    return $("tr").click(function () {
      if ($(this).attr('data-title') === "song1") {
        changeSong(song1);
        $(".slider").slider("option", "max", 331.6);
        window.duration = 331.6;
        $(".song").html("Song 1");
        setInterval(updateSlider, 100);
      } else if ($(this).attr('data-title') === "song2") {
        $(".song").html("Song 2");
        window.duration = 40.8;
        setInterval(updateSlider, 100);
        $(".slider").slider("option", "max", 40.8);
        changeSong(song2);
        setInterval(updateSlider, 100);
      } else if ($(this).attr('data-title') === "song3") {
        $(".song").html("Song 3");
        window.duration = 40.8;
        setInterval(updateSlider, 100);
        $(".slider").slider("option", "max", 40.8);
        changeSong(song3);
        setInterval(updateSlider, 100);
      } else if ($(this).attr('data-title') === "song4") {
        changeSong(song4);
        $(".song").html("Song 4");
        $(".slider").slider("option", "max", 382.2);
        window.duration = 382.2;
        setInterval(updateSlider, 100);
      }
      $(".song-list, .playlist-controls, .overlay").removeClass("active");
      $(".slide-up").html("<i class='fa fa-chevron-up'></i>");
      return slideUp = !slideUp;
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVU7RUFBQTtBQUFBLE1BQUEsYUFBQSxFQUFBLGNBQUEsRUFBQSxVQUFBLEVBQUEsWUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxhQUFBLEVBQUEsa0JBQUEsRUFBQSxvQkFBQSxFQUFBOztFQUNWLGtCQUFBLEdBQXFCLElBQUksSUFBSixDQUFTO0lBQUEsSUFBQSxFQUFNLENBQUMsc0ZBQUQsQ0FBTjtJQUFnRyxNQUFBLEVBQVEsTUFBTSxDQUFDO0VBQS9HLENBQVQ7O0VBRXJCLGFBQUEsR0FBZ0IsSUFBSSxJQUFKLENBQVM7SUFBQSxJQUFBLEVBQU0sQ0FBQyxtRkFBRCxDQUFOO0lBQTZGLE1BQUEsRUFBUSxNQUFNLENBQUM7RUFBNUcsQ0FBVDs7RUFFaEIsU0FBQSxHQUFZLElBQUksSUFBSixDQUFTO0lBQUEsSUFBQSxFQUFNLENBQUMsMEVBQUQsQ0FBTjtJQUFvRixNQUFBLEVBQVEsTUFBTSxDQUFDO0VBQW5HLENBQVQ7O0VBRVosYUFBQSxHQUFnQixJQUFJLElBQUosQ0FBUztJQUFBLElBQUEsRUFBTSxDQUFDLDhFQUFELENBQU47SUFBd0YsTUFBQSxFQUFRLE1BQU0sQ0FBQztFQUF2RyxDQUFUOztFQUVoQixNQUFNLENBQUMsSUFBUCxHQUFjOztFQUNkLE1BQU0sQ0FBQyxNQUFQLEdBQWdCOztFQUNoQixNQUFNLENBQUMsUUFBUCxHQUFrQjs7RUFDbEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7O0VBQ2xCLFFBQUEsR0FBVyxDQUFDLGFBQUQ7O0VBQ1gsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBUSxDQUFDLENBQUQ7O0VBQzdCLE1BQU0sQ0FBQyxHQUFQLEdBQWE7O0VBS2IsVUFBQSxHQUFhLFFBQUEsQ0FBQyxJQUFELENBQUE7SUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQW5CLENBQUE7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RyxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsSUFBTCxDQUFVLFlBQVYsQ0FBQSxLQUEyQixvQkFBOUI7UUFDSCxVQUFBLENBQVcsa0JBQVg7UUFDQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFnQix1QkFBaEI7UUFDQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsTUFBYixDQUFvQixRQUFwQixFQUE4QixLQUE5QixFQUFxQyxLQUFyQztRQUNBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO1FBQ2xCLFdBQUEsQ0FBWSxZQUFaLEVBQTBCLEdBQTFCLEVBTEc7O01BT0wsQ0FBQSxDQUFFLDBDQUFGLENBQTZDLENBQUMsV0FBOUMsQ0FBMEQsUUFBMUQ7TUFDQSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsSUFBZixDQUFvQixrQ0FBcEI7YUFDQSxPQUFBLEdBQVUsQ0FBQztJQTlCQyxDQUFkO0VBM0RBLENBQUY7QUF6RFUiLCJzb3VyY2VzQ29udGVudCI6WyIjdmFyaWFibGVzXG50aGVtZUZyb21UaGVCb3R0b20gPSBuZXcgSG93bCh1cmxzOiBbJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM3NzU2MC8wN19UaGVtZV9mcm9tX3RoZV9Cb3R0b21fKDEpLm1wMyddLCB2b2x1bWU6IHdpbmRvdy52b2x1bWUpXG5cbmJpbGx5QnJlYXRoZXMgPSBuZXcgSG93bCh1cmxzOiBbJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM3NzU2MC8xMF9CaWxseV9CcmVhdGhlc18oMSlfKDEpLm1wMyddLCB2b2x1bWU6IHdpbmRvdy52b2x1bWUpXG5cbmhhcnJ5SG9vZCA9IG5ldyBIb3dsKHVybHM6IFsnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMzc3NTYwL2hhcnJ5LWhvb2Qtc21hbGwubXAzJ10sIHZvbHVtZTogd2luZG93LnZvbHVtZSlcblxuc3V6eUdyZWVuYmVyZyA9IG5ldyBIb3dsKHVybHM6IFsnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMzc3NTYwL3N1enlfZ3JlZW5iZXJnX3NtYWxsLm1wMyddLCB2b2x1bWU6IHdpbmRvdy52b2x1bWUpXG5cbndpbmRvdy5vcGVuID0gdHJ1ZVxud2luZG93LnZvbHVtZSA9IDAuNVxud2luZG93LnBvc2l0aW9uID0gMFxud2luZG93LmR1cmF0aW9uID0gNDAuOFxucGxheWxpc3QgPSBbc3V6eUdyZWVuYmVyZ11cbndpbmRvdy5jdXJyZW50U29uZyA9IHBsYXlsaXN0WzBdXG53aW5kb3cuYWRkID0gbnVsbFxuXG5cblxuXG5jaGFuZ2VTb25nID0gKHNvbmcpIC0+XG4gIHdpbmRvdy5jdXJyZW50U29uZy5zdG9wKClcbiAgd2luZG93LmN1cnJlbnRTb25nLnBvcygwKVxuICB3aW5kb3cucG9zaXRpb24gPSAwXG4gICQoXCIuc2xpZGVyXCIpLnNsaWRlcihcInZhbHVlXCIsIDApIFxuICB3aW5kb3cuY3VycmVudFNvbmcgPSBzb25nXG4gICQoXCIucGxheS1zb25nID4gaVwiKS5yZW1vdmVDbGFzcygnZmEtcGxheScpXG4gICQoXCIucGxheS1zb25nID4gaVwiKS5hZGRDbGFzcygnZmEtcGF1c2UnKVxuICB3aW5kb3cub3BlbiA9IGZhbHNlXG4gIHNvbmcucGxheSgpXG5cbnVwZGF0ZVBvc2l0aW9uU2xpZGVyID0gKCkgLT4gXG4gIHdpbmRvdy5wb3NpdGlvbiArPSAxXG5cbnBsYXlTb25nID0gKHNvbmcpIC0+XG4gIHNvbmcucGxheSgpXG4gIHdpbmRvdy5hZGQgPSBzZXRJbnRlcnZhbCh1cGRhdGVQb3NpdGlvblNsaWRlciwgMTAwMClcbiAgXG5cbnBhdXNlU29uZyA9IChzb25nKSAtPlxuICBzb25nLnBhdXNlKClcbiAgY2xlYXJJbnRlcnZhbCh3aW5kb3cuYWRkKVxuXG5jaGFuZ2VWb2x1bWUgPSAoc29uZykgLT5cbiAgc29uZy52b2x1bWUod2luZG93LnZvbHVtZSlcblxuY2hhbmdlUG9zaXRpb24gPSAoc29uZykgLT5cbiAgc29uZy5wb3Mod2luZG93LnBvc2l0aW9uKVxuXG51cGRhdGVTbGlkZXIgPSAoKSAtPlxuICAkKFwiLnNsaWRlclwiKS5zbGlkZXIoXCJ2YWx1ZVwiLCB3aW5kb3cucG9zaXRpb24pIFxuXG4gIFxuXG4gICAgXG5cblxuJCAtPlxuICBcbiAgJChcIi5zbGlkZXJcIikuc2xpZGVyKHtcbiAgICBtaW46IDBcbiAgICByYW5nZTogXCJtaW5cIlxuICAgIG1heDogd2luZG93LmR1cmF0aW9uXG4gICAgdmFsdWU6IDBcbiAgICBzbGlkZTogKGV2ZW50LCB1aSkgLT5cbiAgICAgIHdpbmRvdy5wb3NpdGlvbiA9IHVpLnZhbHVlXG4gICAgICBjaGFuZ2VQb3NpdGlvbih3aW5kb3cuY3VycmVudFNvbmcpXG4gICAgfSlcbiAgc2V0SW50ZXJ2YWwodXBkYXRlU2xpZGVyLCAxMDApXG4gIFxuICAkKFwiI3ZvbHVtZS1vZmZcIikuY2xpY2sgLT5cbiAgICBjdXJyZW50U29uZy52b2x1bWUoMClcbiAgICAkKFwiLnNsaWRlci12b2x1bWVcIikuc2xpZGVyKFwidmFsdWVcIiwgMClcbiAgXG4gICQoXCIjdm9sdW1lLXVwXCIpLmNsaWNrIC0+XG4gICAgY3VycmVudFNvbmcudm9sdW1lKDEpXG4gICAgJChcIi5zbGlkZXItdm9sdW1lXCIpLnNsaWRlcihcInZhbHVlXCIsIDEwMClcbiAgICBcbiAgICAgXG4gIFxuICBcbiAgJChcIi5zbGlkZXItdm9sdW1lXCIpLnNsaWRlcih7XG4gICAgbWluOiAwXG4gICAgcmFuZ2U6IFwibWluXCJcbiAgICBtYXg6IDEwMFxuICAgIHZhbHVlOiA1MFxuICAgIHNsaWRlOiAoZXZlbnQsIHVpKSAtPlxuICAgICAgd2luZG93LnZvbHVtZSA9ICh1aS52YWx1ZSkgLyAxMDBcbiAgICAgIGNoYW5nZVZvbHVtZSh3aW5kb3cuY3VycmVudFNvbmcpXG4gICAgICBcbiAgICB9KVxuICBcbiAgJChcIiNwbGF5XCIpLmNsaWNrIC0+XG4gICAgaWYgd2luZG93Lm9wZW5cbiAgICAgIHBsYXlTb25nKHdpbmRvdy5jdXJyZW50U29uZylcbiAgICAgICQoXCIucGxheS1zb25nID4gaVwiKS5yZW1vdmVDbGFzcygnZmEtcGxheScpXG4gICAgICAkKFwiLnBsYXktc29uZyA+IGlcIikuYWRkQ2xhc3MoJ2ZhLXBhdXNlJylcbiAgICAgIHdpbmRvdy5vcGVuID0gIXdpbmRvdy5vcGVuIFxuICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlU2xpZGVyLCAxMDApXG4gICAgZWxzZVxuICAgICAgcGF1c2VTb25nKHdpbmRvdy5jdXJyZW50U29uZylcbiAgICAgICQoXCIucGxheS1zb25nID4gaVwiKS5yZW1vdmVDbGFzcygnZmEtcGF1c2UnKVxuICAgICAgJChcIi5wbGF5LXNvbmcgPiBpXCIpLmFkZENsYXNzKCdmYS1wbGF5JylcbiAgICAgIHdpbmRvdy5vcGVuID0gIXdpbmRvdy5vcGVuXG4gIHNsaWRlVXAgPSB0cnVlXG4gIFxuICAkKFwiLnNsaWRlLXVwXCIpLmNsaWNrIC0+XG4gICAgaWYgc2xpZGVVcFxuICAgICAgJChcIi5zb25nLWxpc3QsIC5wbGF5bGlzdC1jb250cm9scywgLm92ZXJsYXlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICQoXCIuc2xpZGUtdXBcIikuaHRtbChcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWRvd24nPjwvaT5cIilcbiAgICAgIHNsaWRlVXAgPSAhc2xpZGVVcFxuICAgIGVsc2VcbiAgICAgICQoXCIuc29uZy1saXN0LCAucGxheWxpc3QtY29udHJvbHMsIC5vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAkKFwiLnNsaWRlLXVwXCIpLmh0bWwoXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi11cCc+PC9pPlwiKVxuICAgICAgc2xpZGVVcCA9ICFzbGlkZVVwXG4gIFxuICAkKFwidHJcIikuY2xpY2sgLT5cbiAgICBpZiAkKEApLmF0dHIoJ2RhdGEtdGl0bGUnKSBpcyBcImJpbGx5QnJlYXRoZXNcIlxuICAgICAgY2hhbmdlU29uZyhiaWxseUJyZWF0aGVzKVxuICAgICAgJChcIi5zbGlkZXJcIikuc2xpZGVyKFwib3B0aW9uXCIsXCJtYXhcIiwgMzMxLjYpIFxuICAgICAgd2luZG93LmR1cmF0aW9uID0gMzMxLjZcbiAgICAgICQoXCIuc29uZ1wiKS5odG1sKFwiQmlsbHkgQnJlYXRoZXNcIilcbiAgICAgIHNldEludGVydmFsKHVwZGF0ZVNsaWRlciwgMTAwKVxuICAgIGVsc2UgaWYgJChAKS5hdHRyKCdkYXRhLXRpdGxlJykgaXMgXCJoYXJyeUhvb2RcIlxuICAgICAgJChcIi5zb25nXCIpLmh0bWwoXCJIYXJyeSBIb29kXCIpXG4gICAgICB3aW5kb3cuZHVyYXRpb24gPSA0MC44XG4gICAgICBzZXRJbnRlcnZhbCh1cGRhdGVTbGlkZXIsIDEwMClcbiAgICAgICQoXCIuc2xpZGVyXCIpLnNsaWRlcihcIm9wdGlvblwiLFwibWF4XCIsIDQwLjgpIFxuICAgICAgY2hhbmdlU29uZyhoYXJyeUhvb2QpXG4gICAgICBzZXRJbnRlcnZhbCh1cGRhdGVTbGlkZXIsIDEwMClcbiAgICBlbHNlIGlmICQoQCkuYXR0cignZGF0YS10aXRsZScpIGlzIFwic3V6eUdyZWVuYmVyZ1wiXG4gICAgICAkKFwiLnNvbmdcIikuaHRtbChcIlN1enkgR3JlZW5iZXJnXCIpXG4gICAgICB3aW5kb3cuZHVyYXRpb24gPSA0MC44XG4gICAgICBzZXRJbnRlcnZhbCh1cGRhdGVTbGlkZXIsIDEwMClcbiAgICAgICQoXCIuc2xpZGVyXCIpLnNsaWRlcihcIm9wdGlvblwiLFwibWF4XCIsIDQwLjgpXG4gICAgICBjaGFuZ2VTb25nKHN1enlHcmVlbmJlcmcpXG4gICAgICBzZXRJbnRlcnZhbCh1cGRhdGVTbGlkZXIsIDEwMClcbiAgICBlbHNlIGlmICQoQCkuYXR0cignZGF0YS10aXRsZScpIGlzIFwidGhlbWVGcm9tVGhlQm90dG9tXCJcbiAgICAgIGNoYW5nZVNvbmcodGhlbWVGcm9tVGhlQm90dG9tKVxuICAgICAgJChcIi5zb25nXCIpLmh0bWwoXCJUaGVtZSBGcm9tIFRoZSBCb3R0b21cIilcbiAgICAgICQoXCIuc2xpZGVyXCIpLnNsaWRlcihcIm9wdGlvblwiLCBcIm1heFwiLCAzODIuMilcbiAgICAgIHdpbmRvdy5kdXJhdGlvbiA9IDM4Mi4yXG4gICAgICBzZXRJbnRlcnZhbCh1cGRhdGVTbGlkZXIsIDEwMClcbiAgICBcbiAgICAkKFwiLnNvbmctbGlzdCwgLnBsYXlsaXN0LWNvbnRyb2xzLCAub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICQoXCIuc2xpZGUtdXBcIikuaHRtbChcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXVwJz48L2k+XCIpXG4gICAgc2xpZGVVcCA9ICFzbGlkZVVwXG4gIFxuICAgIFxuICAgICAgIl19
//# sourceURL=coffeescript