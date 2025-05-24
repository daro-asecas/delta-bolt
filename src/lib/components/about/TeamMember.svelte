<script>
  export let member;
</script>

<div class="team-member group">
  <div class="mb-6 image-hover">
    <img 
      src={member.image} 
      alt={member.name} 
      class="w-full h-80 object-cover"
    />
  </div>
  
  <h3 class="text-xl mb-1">{member.name}</h3>
  <p class="text-delta-gray mb-3">{member.role}</p>
  <p class="text-delta-dark">{member.bio}</p>
</div>